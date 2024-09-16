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
export type EditProps = typeof __propDef.props;
export type EditEvents = typeof __propDef.events;
export type EditSlots = typeof __propDef.slots;
export default class Edit extends SvelteComponentTyped<EditProps, EditEvents, EditSlots> {
}
export {};
