import type {
  CardsContainerProps,
  CardsNavigationProps,
  WorkoutProps,
} from "../../types/types";
import { useTempWorkout } from "../../hooks/useTempWorkout";
import { useFormState } from "../../hooks/useFormState";
import { useCurrIndex } from "../../hooks/useCurrIndex";
import { initWorkout } from "../../utils/variables";
import EmptyCardsContainer from "./empty-cards-container";
import CardsNavigation from "./cards-navigation";
import EditBar from "./edit-bar";
import AddingForm from "./adding-form";
import ChangingForm from "./changing-form";
import { StartBtn } from "../buttons";

const CardsContainer = ({
  workouts,
  addWorkout,
  changeWorkout,
  removeWorkout,
  isEditing,
  toggleEdit,
}: CardsContainerProps) => {
  const { tempWorkout, modifyTempWorkout, modifyProp, clearField } =
    useTempWorkout(initWorkout);
  const { formState, addingState, changingState, idleState } = useFormState();
  const { currIndex, prevCard, nextCard, switchOnRemove } =
    useCurrIndex(workouts);

  const currWorkout = workouts[currIndex];

  if (!currWorkout) {
    return (
      <EmptyCardsContainer
        addingState={addingState}
        formState={formState}
        tempWorkout={tempWorkout}
        idleState={idleState}
        addWorkout={addWorkout}
        modifyTempWorkout={modifyTempWorkout}
        modifyProp={modifyProp}
      />
    );
  }

  return (
    <div className="relative flex flex-col gap-2">
      <WorkoutCard
        id={currWorkout.id}
        name={currWorkout.name}
        tooltip={currWorkout.tooltip}
        workouts={workouts}
        prevCard={prevCard}
        nextCard={nextCard}
      />
      {isEditing && (
        <EditBar
          currWorkout={currWorkout}
          changingState={changingState}
          removeWorkout={removeWorkout}
          switchOnRemove={switchOnRemove}
          addingState={addingState}
          modifyTempWorkout={modifyTempWorkout}
          toggleEdit={toggleEdit}
        />
      )}
      {formState === "adding" && (
        <AddingForm
          tempWorkout={tempWorkout}
          idleState={idleState}
          addWorkout={addWorkout}
          modifyTempWorkout={modifyTempWorkout}
          modifyProp={modifyProp}
        />
      )}
      {formState === "changing" && (
        <ChangingForm
          tempWorkout={tempWorkout}
          workoutName={currWorkout.name}
          idleState={idleState}
          changeWorkout={changeWorkout}
          modifyTempWorkout={modifyTempWorkout}
          modifyProp={modifyProp}
          clearField={clearField}
        />
      )}
    </div>
  );
};

const WorkoutCard = ({
  id,
  name,
  tooltip,
  workouts,
  prevCard,
  nextCard,
}: WorkoutProps & CardsNavigationProps) => {
  return (
    <div
      className="relative h-[500px] w-[380px] overflow-hidden rounded-[24px] border-4 border-orange-button600 
      bg-slate-light50 dark:border-orange-button500 dark:bg-gradient-to-tr dark:from-slate-dark700 dark:to-slate-dark800"
    >
      <CardsNavigation
        workouts={workouts}
        prevCard={prevCard}
        nextCard={nextCard}
      />
      <div key={id} className="relative flex flex-col items-center gap-4 p-4">
        <p className="text-2xl font-medium text-slate-main600 dark:text-slate-light200">
          {name}
        </p>
        <p className="text-sm text-slate-light400">{tooltip}</p>
        <StartBtn />
      </div>
      <div className="absolute -left-[75px] top-[310px] h-[290px] w-[290px] rounded-full bg-[#caeed2] dark:bg-[#69ab69]/70"></div>
      <div className="absolute left-[280px] top-[394px] h-[160px] w-[160px] rounded-full bg-[#b4c6b1] dark:bg-[#4a784a]/80"></div>
    </div>
  );
};

export default CardsContainer;
