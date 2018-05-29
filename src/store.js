import {} from "react-redux";

const initialState = {
    address: "",
    isValid: null
};

const ADDRESS_CHANGE = "Address.Change";
const CHECK_VALIDITY = "Validity.Check";
const CLEAR_VALIDITY = "Validity.Clear";

export const handleAddressChange = address => ({
    type: ADDRESS_CHANGE,
    address
});

export const checkValidity = isValid => ({
    type: CHECK_VALIDITY,
    isValid
});

export const clearValidity = () => ({
    type: CLEAR_VALIDITY
})

export default function ethApp(state = initialState, action) {
    switch (action.type) {
        case ADDRESS_CHANGE:
            return {
                ...state,
                address: action.address
            }
        case CHECK_VALIDITY:
            return {
                ...state,
                isValid: action.isValid
            }
        case CLEAR_VALIDITY:
            return {
                ...state,
                isValid: null
            }
    }
    return state;
}
