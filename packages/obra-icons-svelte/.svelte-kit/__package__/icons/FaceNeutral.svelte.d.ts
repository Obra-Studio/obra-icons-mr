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
export type FaceNeutralProps = typeof __propDef.props;
export type FaceNeutralEvents = typeof __propDef.events;
export type FaceNeutralSlots = typeof __propDef.slots;
export default class FaceNeutral extends SvelteComponentTyped<FaceNeutralProps, FaceNeutralEvents, FaceNeutralSlots> {
}
export {};
