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
export type AnalysisProps = typeof __propDef.props;
export type AnalysisEvents = typeof __propDef.events;
export type AnalysisSlots = typeof __propDef.slots;
export default class Analysis extends SvelteComponentTyped<AnalysisProps, AnalysisEvents, AnalysisSlots> {
}
export {};
