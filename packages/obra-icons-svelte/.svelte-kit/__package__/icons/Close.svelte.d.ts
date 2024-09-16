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
export type CloseProps = typeof __propDef.props;
export type CloseEvents = typeof __propDef.events;
export type CloseSlots = typeof __propDef.slots;
export default class Close extends SvelteComponentTyped<CloseProps, CloseEvents, CloseSlots> {
}
export {};
