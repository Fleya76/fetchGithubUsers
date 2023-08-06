type TimeoutId = ReturnType<typeof setTimeout>;

const debounce = <T extends (...args: any[]) => void>(
    callback: T,
    delay: number
) => {
    let timeoutId: TimeoutId | null;

    return (...args: Parameters<T>): void => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }

        timeoutId = setTimeout(() => {
            callback(...args);
            timeoutId = null;
        }, delay);
    };
};

export { debounce }