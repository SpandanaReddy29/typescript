//allows to define a set of named constants
//where this constants can be number or string values
//by default the constants are number
enum OrderedStatus {
  PENDING,
  SHIPPED,
  DELIVERED,
  RETURNED,
}
const myStatus = OrderedStatus.DELIVERED;
function isDelivered(status: OrderedStatus.DELIVERED) {
  return status === OrderedStatus.DELIVERED;
}

enum ArrowKeys {
  UP = "up",
  DOWN = "down",
  RIGHT = "right",
  LEFT = "left",
}
