import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Dog = {
  id: number;
  name: string;
  image: {
    url: string;
  };
  temperament?: string;
  bredFor?: string;
  lifeSpan?: string;
  origin?: string;
};

interface DogState {
  selectedDog: Dog | undefined;
  dogList: Dog[];
}

const initialState: DogState = {
  selectedDog: undefined,
  dogList: [],
};

export const dogSlice = createSlice({
  name: 'dog',
  initialState,
  reducers: {
    setDogList(state, action: PayloadAction<Dog[]>) {
      state.dogList = action.payload;
    },
    // immer makes state immutable and handles these state edits.
    selectDog(state, action: PayloadAction<number>) {
      state.selectedDog = state.dogList.find(
        (dog) => dog.id === action.payload
      );
    },
    addDog(state, action: PayloadAction<Dog>) {
      state.dogList.push(action.payload);
    },
    editDog(state, action: PayloadAction<{ id: number; updatedDog: Dog }>) {
      const dogIndex = state.dogList.findIndex(
        (dog) => dog.id === action.payload.id
      );
      state.dogList[dogIndex] = action.payload.updatedDog;
    },
    removeDog(state, action: PayloadAction<number>) {
      state.dogList.splice(
        state.dogList.findIndex((dog) => dog.id === action.payload),
        1
      );
    },
  },
});

export const { setDogList, selectDog, addDog, editDog, removeDog } =
  dogSlice.actions;
export default dogSlice.reducer;
