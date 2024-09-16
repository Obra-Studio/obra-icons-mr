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
export type BluetoothProps = typeof __propDef.props;
export type BluetoothEvents = typeof __propDef.events;
export type BluetoothSlots = typeof __propDef.slots;
export default class Bluetooth extends SvelteComponentTyped<BluetoothProps, BluetoothEvents, BluetoothSlots> {
}
export {};
