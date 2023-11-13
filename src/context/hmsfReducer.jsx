export const initialState = {
    step01: '',
    step02: '',
    step03: '',
    step04: '',
    step05: '',
    step06: '',
    currentStep: 1,
};

export const hmsfReducer = (state, action) => {
    switch (action.type) {
        case 'STEP01':
            return {
                ...state,
                step01: action.payload,
                currentStep: state.currentStep++,
            };
        case 'STEP02':
            return {
                ...state,
                step02: action.payload,
                currentStep: state.currentStep++,
            };
        case 'STEP03':
            return {
                ...state,
                step03: action.payload,
                currentStep: state.currentStep++,
            };
        case 'STEP04':
            return {
                ...state,
                step04: action.payload,
                currentStep: state.currentStep++,
            };
        case 'STEP05':
            return {
                ...state,
                step05: action.payload,
                currentStep: state.currentStep++,
            };
        case 'STEP06':
            return {
                ...state,
                step06: action.payload,
                currentStep: state.currentStep++,
            };
        default:
            return state;
    }
};
