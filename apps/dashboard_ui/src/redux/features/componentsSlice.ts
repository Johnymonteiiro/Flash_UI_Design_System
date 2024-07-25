import { createSlice,PayloadAction} from '@reduxjs/toolkit'
import { RootState } from "@/redux/store/store"

export interface initialStateProps {
  props: {
    name:string,
    active:boolean
  }[]
}


const initialState: initialStateProps = {
  props: [
    {name: "color", active: false},
    {name: "size", active:false}
  ],
}


export const componentsSlice = createSlice({
  name: 'components',
  initialState,
  reducers: {
    setActiveProps: (state, action: PayloadAction<{propsName: string}>) => {
        const { propsName } = action.payload

        for( var i = 0; i< initialState.props.length; i++) {
            if(initialState.props[i].name === propsName) {
               state.props[i].active= true
             }
        }
    },
  },
})

export const { setActiveProps } =  componentsSlice.actions
export const activeProps = (state: RootState) => state.components.props

export default componentsSlice.reducer