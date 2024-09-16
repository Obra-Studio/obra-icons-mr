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
export type PencilFillProps = typeof __propDef.props;
export type PencilFillEvents = typeof __propDef.events;
export type PencilFillSlots = typeof __propDef.slots;
export default class PencilFill extends SvelteComponentTyped<PencilFillProps, PencilFillEvents, PencilFillSlots> {
}
export {};
