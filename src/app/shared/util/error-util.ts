import { GeneralConstants } from '../constants/general-constants.model';
import { ComponentErrorStatus } from '../data/component-error-wrapper.model';

export class ErrorUtils {
    public static displayComponentError(componentErrorStatusWrapper: ComponentErrorStatus, errorType: string, errorMessage: string) {
        componentErrorStatusWrapper.isDisplayError = true
        componentErrorStatusWrapper.displayedErrorType = errorType
        if (errorMessage == "" || errorMessage == null) {
            componentErrorStatusWrapper.errorMessage == GeneralConstants.DEFAULT_ERROR_MESSAGE
        } else {
            componentErrorStatusWrapper.errorMessage = errorMessage
        }
    }

    public static turnOffComponentError(componentErrorStatusWrapper: ComponentErrorStatus) {
        componentErrorStatusWrapper.isDisplayError = false
        componentErrorStatusWrapper.displayedErrorType = null
        componentErrorStatusWrapper.errorMessage = null
    }
}