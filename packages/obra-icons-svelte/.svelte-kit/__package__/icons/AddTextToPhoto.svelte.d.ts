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
export type AddTextToPhotoProps = typeof __propDef.props;
export type AddTextToPhotoEvents = typeof __propDef.events;
export type AddTextToPhotoSlots = typeof __propDef.slots;
export default class AddTextToPhoto extends SvelteComponentTyped<AddTextToPhotoProps, AddTextToPhotoEvents, AddTextToPhotoSlots> {
}
export {};
