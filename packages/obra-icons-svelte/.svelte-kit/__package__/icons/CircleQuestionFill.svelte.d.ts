import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        size?: number;
        color?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type CircleQuestionFillProps = typeof __propDef.props;
export type CircleQuestionFillEvents = typeof __propDef.events;
export type CircleQuestionFillSlots = typeof __propDef.slots;
export default class CircleQuestionFill extends SvelteComponentTyped<CircleQuestionFillProps, CircleQuestionFillEvents, CircleQuestionFillSlots> {
}
export {};
