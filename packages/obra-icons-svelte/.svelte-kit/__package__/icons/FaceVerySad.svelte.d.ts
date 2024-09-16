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
export type FaceVerySadProps = typeof __propDef.props;
export type FaceVerySadEvents = typeof __propDef.events;
export type FaceVerySadSlots = typeof __propDef.slots;
export default class FaceVerySad extends SvelteComponentTyped<FaceVerySadProps, FaceVerySadEvents, FaceVerySadSlots> {
}
export {};
