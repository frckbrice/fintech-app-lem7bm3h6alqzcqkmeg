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

    log(message: string, level: LogType) {
        console.log(`\n\n ${this.name} : ${new Date().toISOString()}: ${LOG_LEVEL[level]}: ${message}\n\n`);
    }
}

export default (new AppError('') as AppError)