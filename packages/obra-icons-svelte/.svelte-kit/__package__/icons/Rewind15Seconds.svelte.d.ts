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
export type Rewind15SecondsProps = typeof __propDef.props;
export type Rewind15SecondsEvents = typeof __propDef.events;
export type Rewind15SecondsSlots = typeof __propDef.slots;
export default class Rewind15Seconds extends SvelteComponentTyped<Rewind15SecondsProps, Rewind15SecondsEvents, Rewind15SecondsSlots> {
}
export {};
