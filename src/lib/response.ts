export const response = <T>(data: {
    message: string;
    data: T;
    error: any;
} | null, success: boolean): {
    success: boolean;
    data: {
        message: string;
        data: T;
        error: any;
    } | null;
} => {
    if(!success || !data) {
        return {
            success,
            data: data
        }
    } else {
        return {
            success,
            data: {
                message: data.message,
                data: data.data,
                error: data.error,
            }
        }
    }
}