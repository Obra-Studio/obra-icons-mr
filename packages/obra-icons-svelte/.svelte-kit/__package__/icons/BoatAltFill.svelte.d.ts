import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        size?: number;
        color?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type BoatAltFillProps = typeof __propDef.props;
export type BoatAltFillEvents = typeof __propDef.events;
export type BoatAltFillSlots = typeof __propDef.slots;
export default class BoatAltFill extends SvelteComponentTyped<BoatAltFillProps, BoatAltFillEvents, BoatAltFillSlots> {
}
export {};
