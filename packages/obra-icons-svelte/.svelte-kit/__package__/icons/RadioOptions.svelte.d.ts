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
export type RadioOptionsProps = typeof __propDef.props;
export type RadioOptionsEvents = typeof __propDef.events;
export type RadioOptionsSlots = typeof __propDef.slots;
export default class RadioOptions extends SvelteComponentTyped<RadioOptionsProps, RadioOptionsEvents, RadioOptionsSlots> {
}
export {};
