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
export type ToiletPaperProps = typeof __propDef.props;
export type ToiletPaperEvents = typeof __propDef.events;
export type ToiletPaperSlots = typeof __propDef.slots;
export default class ToiletPaper extends SvelteComponentTyped<ToiletPaperProps, ToiletPaperEvents, ToiletPaperSlots> {
}
export {};
