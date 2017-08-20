import {FormStatus, GlobalActions, Status} from "./global";
import {OptionsState} from "../app/options-form/reducer";

export function setStatus(status: Status) {
    return {
        type: GlobalActions.SetStatus,
        payload: status
    }
}

export function setFormStatus(formStatus: FormStatus) {
    return {
        type: GlobalActions.SetFormStatus,
        payload: formStatus
    }
}

export function initBs(options: OptionsState) {
    return {
        type: GlobalActions.BsInit,
        payload: options
    }
}
