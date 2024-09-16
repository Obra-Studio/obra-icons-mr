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
export type BusinessAltFillProps = typeof __propDef.props;
export type BusinessAltFillEvents = typeof __propDef.events;
export type BusinessAltFillSlots = typeof __propDef.slots;
export default class BusinessAltFill extends SvelteComponentTyped<BusinessAltFillProps, BusinessAltFillEvents, BusinessAltFillSlots> {
}
export {};
