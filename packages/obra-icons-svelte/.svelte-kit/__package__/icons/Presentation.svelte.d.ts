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
export type PresentationProps = typeof __propDef.props;
export type PresentationEvents = typeof __propDef.events;
export type PresentationSlots = typeof __propDef.slots;
export default class Presentation extends SvelteComponentTyped<PresentationProps, PresentationEvents, PresentationSlots> {
}
export {};
