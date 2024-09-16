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
export type VolumeCenteredFillProps = typeof __propDef.props;
export type VolumeCenteredFillEvents = typeof __propDef.events;
export type VolumeCenteredFillSlots = typeof __propDef.slots;
export default class VolumeCenteredFill extends SvelteComponentTyped<VolumeCenteredFillProps, VolumeCenteredFillEvents, VolumeCenteredFillSlots> {
}
export {};
