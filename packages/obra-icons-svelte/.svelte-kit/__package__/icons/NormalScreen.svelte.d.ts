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
export type NormalScreenProps = typeof __propDef.props;
export type NormalScreenEvents = typeof __propDef.events;
export type NormalScreenSlots = typeof __propDef.slots;
export default class NormalScreen extends SvelteComponentTyped<NormalScreenProps, NormalScreenEvents, NormalScreenSlots> {
}
export {};
