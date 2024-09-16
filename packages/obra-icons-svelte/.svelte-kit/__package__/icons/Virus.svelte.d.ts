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
export type VirusProps = typeof __propDef.props;
export type VirusEvents = typeof __propDef.events;
export type VirusSlots = typeof __propDef.slots;
export default class Virus extends SvelteComponentTyped<VirusProps, VirusEvents, VirusSlots> {
}
export {};
