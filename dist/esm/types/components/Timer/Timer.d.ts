/// <reference types="react" />
export interface TimerProps {
    initialHour: number;
    initialMinute: number;
    initialSeconds: number;
    interval?: number;
    onCompleted?: () => void;
}
declare const useTimer: (props: TimerProps) => {
    Timer: () => JSX.Element;
    isCompleted: boolean;
    timeOptions: {
        hours: number;
        minutes: number;
        seconds: number;
    };
};
export default useTimer;
