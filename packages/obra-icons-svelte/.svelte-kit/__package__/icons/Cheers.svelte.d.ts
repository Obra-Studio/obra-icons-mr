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
export type CheersProps = typeof __propDef.props;
export type CheersEvents = typeof __propDef.events;
export type CheersSlots = typeof __propDef.slots;
export default class Cheers extends SvelteComponentTyped<CheersProps, CheersEvents, CheersSlots> {
}
export {};
