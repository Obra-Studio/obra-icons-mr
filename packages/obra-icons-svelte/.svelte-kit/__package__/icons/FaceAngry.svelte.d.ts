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
export type FaceAngryProps = typeof __propDef.props;
export type FaceAngryEvents = typeof __propDef.events;
export type FaceAngrySlots = typeof __propDef.slots;
export default class FaceAngry extends SvelteComponentTyped<FaceAngryProps, FaceAngryEvents, FaceAngrySlots> {
}
export {};
