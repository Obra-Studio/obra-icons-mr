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
export type FaceVeryHappyProps = typeof __propDef.props;
export type FaceVeryHappyEvents = typeof __propDef.events;
export type FaceVeryHappySlots = typeof __propDef.slots;
export default class FaceVeryHappy extends SvelteComponentTyped<FaceVeryHappyProps, FaceVeryHappyEvents, FaceVeryHappySlots> {
}
export {};
