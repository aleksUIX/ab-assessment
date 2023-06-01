interface TicketInterface {
  type: string;
  name: string;
  description: string;
  cost: number;
}

interface CatalogInterface {
  name: string;
  id: string;
  date: number;
  location: string;
  description_blurb: string;
  imgUrl: string;
  ticketTypes: TicketInterface[];
}

interface CatalogContextInterface {
  catalog: CatalogInterface[];
}