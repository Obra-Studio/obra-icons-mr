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
export type EuroProps = typeof __propDef.props;
export type EuroEvents = typeof __propDef.events;
export type EuroSlots = typeof __propDef.slots;
export default class Euro extends SvelteComponentTyped<EuroProps, EuroEvents, EuroSlots> {
}
export {};
