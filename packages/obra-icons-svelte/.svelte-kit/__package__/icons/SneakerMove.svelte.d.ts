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
export type SneakerMoveProps = typeof __propDef.props;
export type SneakerMoveEvents = typeof __propDef.events;
export type SneakerMoveSlots = typeof __propDef.slots;
export default class SneakerMove extends SvelteComponentTyped<SneakerMoveProps, SneakerMoveEvents, SneakerMoveSlots> {
}
export {};
