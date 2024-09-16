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
export type CornflakesProps = typeof __propDef.props;
export type CornflakesEvents = typeof __propDef.events;
export type CornflakesSlots = typeof __propDef.slots;
export default class Cornflakes extends SvelteComponentTyped<CornflakesProps, CornflakesEvents, CornflakesSlots> {
}
export {};
