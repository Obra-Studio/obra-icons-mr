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
export type MachineLearningProps = typeof __propDef.props;
export type MachineLearningEvents = typeof __propDef.events;
export type MachineLearningSlots = typeof __propDef.slots;
export default class MachineLearning extends SvelteComponentTyped<MachineLearningProps, MachineLearningEvents, MachineLearningSlots> {
}
export {};
