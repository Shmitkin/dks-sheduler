import React, {useEffect, useState, useRef} from 'react';

export default function StepItem({currentStep, onSaveButtonClick, onStepDeleteButtonClick}) {
  const [step, setStep] = useState(currentStep);
  const [isEditMode, setIsEditMode] = useState(false);

  function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }

  const prevCurrentStep = usePrevious(currentStep);

  useEffect(() => {
    if (prevCurrentStep !== currentStep) {
      setStep(currentStep);
    }
  }, [currentStep, prevCurrentStep]);

  return (
    <li
      className="current-task-area__list-item"
    >
      {isEditMode && (
        <>
          <input
            value={step.name}
            onChange={(evt) => setStep((prevState) => ({...prevState, name: evt.target.value}))}
          />
          <button type="button" onClick={() => { onSaveButtonClick(step); setIsEditMode(false); }}>Сохранить</button>
          <button type="button" onClick={() => { setIsEditMode(false); setStep(currentStep); }}>Отменить</button>
        </>
      )}
      {!isEditMode && (
        <>
          <span>{`Шаг: ${step.id} - ${step.name}`}</span>
          <button type="button" onClick={() => { setIsEditMode(true); }}>Редактировать</button>
          <button type="button" onClick={() => { onStepDeleteButtonClick(step.id); }}>Удалить</button>
        </>
      )}
    </li>
  );
}
