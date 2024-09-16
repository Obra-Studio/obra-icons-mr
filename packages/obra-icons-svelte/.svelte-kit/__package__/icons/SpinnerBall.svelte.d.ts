import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        size?: number;
        color?: string;
        strokeWidth?: number;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type SpinnerBallProps = typeof __propDef.props;
export type SpinnerBallEvents = typeof __propDef.events;
export type SpinnerBallSlots = typeof __propDef.slots;
export default class SpinnerBall extends SvelteComponentTyped<SpinnerBallProps, SpinnerBallEvents, SpinnerBallSlots> {
}
export {};
