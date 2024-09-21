const LOG_LEVEL = {
    DEBUG: 'debug',
    INFO: 'info',
    WARN: 'warn',
    ERROR: 'error',
    FATAL: 'fatal',
    OFF: 'off',
} as const;
type ObjectValue<T> = T[keyof T];

type LogLevel = ObjectValue<typeof LOG_LEVEL>;

type LogMessage = {
    message: string;
    level: LogLevel;
}

type LogValues = (typeof LOG_LEVEL)[keyof typeof LOG_LEVEL];

type LogType = keyof typeof LOG_LEVEL;

class AppError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'AppError';
    }

    /**
     * Logs a message with the given level. The message will be prefixed with
     * the current timestamp and the error name.
     * @param message The message to log
     * @param level The level of the message
     * @example
     * const error = new AppError('');
     * error.log('This is a debug message', 'debug');
     */
    log(message: string, level: LogType) {
        const now = new Date().toISOString();
        const prefix = `\n\n ${this.name} : ${now}: ${LOG_LEVEL[level]}: `;
        console.log(prefix + message + '\n');
    }
}

export default (new AppError('') as AppError)