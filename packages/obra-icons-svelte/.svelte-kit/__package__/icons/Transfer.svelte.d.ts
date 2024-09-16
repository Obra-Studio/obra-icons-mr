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
export type TransferProps = typeof __propDef.props;
export type TransferEvents = typeof __propDef.events;
export type TransferSlots = typeof __propDef.slots;
export default class Transfer extends SvelteComponentTyped<TransferProps, TransferEvents, TransferSlots> {
}
export {};
