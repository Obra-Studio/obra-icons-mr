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
export type EyeCloseProps = typeof __propDef.props;
export type EyeCloseEvents = typeof __propDef.events;
export type EyeCloseSlots = typeof __propDef.slots;
export default class EyeClose extends SvelteComponentTyped<EyeCloseProps, EyeCloseEvents, EyeCloseSlots> {
}
export {};
