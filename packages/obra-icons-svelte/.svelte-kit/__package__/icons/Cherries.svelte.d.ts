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
export type CherriesProps = typeof __propDef.props;
export type CherriesEvents = typeof __propDef.events;
export type CherriesSlots = typeof __propDef.slots;
export default class Cherries extends SvelteComponentTyped<CherriesProps, CherriesEvents, CherriesSlots> {
}
export {};
