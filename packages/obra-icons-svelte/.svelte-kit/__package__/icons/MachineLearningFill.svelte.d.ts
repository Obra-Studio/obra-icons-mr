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
export type MachineLearningFillProps = typeof __propDef.props;
export type MachineLearningFillEvents = typeof __propDef.events;
export type MachineLearningFillSlots = typeof __propDef.slots;
export default class MachineLearningFill extends SvelteComponentTyped<MachineLearningFillProps, MachineLearningFillEvents, MachineLearningFillSlots> {
}
export {};
