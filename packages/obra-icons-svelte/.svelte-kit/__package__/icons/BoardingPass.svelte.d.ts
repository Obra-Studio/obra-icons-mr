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
export type BoardingPassProps = typeof __propDef.props;
export type BoardingPassEvents = typeof __propDef.events;
export type BoardingPassSlots = typeof __propDef.slots;
export default class BoardingPass extends SvelteComponentTyped<BoardingPassProps, BoardingPassEvents, BoardingPassSlots> {
}
export {};
