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
export type CircleQuestionProps = typeof __propDef.props;
export type CircleQuestionEvents = typeof __propDef.events;
export type CircleQuestionSlots = typeof __propDef.slots;
export default class CircleQuestion extends SvelteComponentTyped<CircleQuestionProps, CircleQuestionEvents, CircleQuestionSlots> {
}
export {};
