
export class ComponentErrorStatus {
    errorMessage: string
    isDisplayError: boolean
    displayedErrorType: string
    
    public constructor (
        errorMessage?: string,
        isDisplayError?: boolean,
        displayedErrorType?: string
    ) {
        this.errorMessage = errorMessage
        this.isDisplayError = isDisplayError
        this.displayedErrorType = displayedErrorType
    }
}