import { Room } from "./contracts/room";

type RoomNumber = 'A01' | 'A02' | 'A03' | 'B01' | 'B02' | 'B03';


export class Apartment implements Room {
    public readonly roomNumber: RoomNumber;
    private readonly _price: number;
    private readonly _numberOfGuests: number;

    constructor(price: number, roomNumber: RoomNumber, numberOfGuests: number) {
        this._price = price;
        this.roomNumber = roomNumber;
        this._numberOfGuests = numberOfGuests;
    }

    public get totalPrice(): number {
        return this._price * this._numberOfGuests;
    }

    public get cancellationPrice(): number {
        return this.totalPrice * 0.8;
    }
}
