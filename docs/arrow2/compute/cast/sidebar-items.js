initSidebarItems({"fn":[["binary_large_to_binary",""],["binary_to_dictionary","Cast [`BinaryArray`] to [`DictionaryArray`], also known as packing."],["binary_to_large_binary",""],["binary_to_primitive","Casts a [`BinaryArray`] to a [`PrimitiveArray`], making any uncastable value a Null."],["boolean_to_binary","Casts the [`BooleanArray`] to a [`BinaryArray`], casting trues to `\"1\"` and falses to `\"0\"`"],["boolean_to_primitive","Casts the [`BooleanArray`] to a [`PrimitiveArray`]."],["boolean_to_utf8","Casts the [`BooleanArray`] to a [`Utf8Array`], casting trues to `\"1\"` and falses to `\"0\"`"],["can_cast_types","Return true if a value of type `from_type` can be cast into a value of `to_type`. Note that such as cast may be lossy."],["cast","Cast `array` to the provided data type and return a new [`Array`] with type `to_type`, if possible."],["date32_to_date64",""],["date64_to_date32",""],["dictionary_to_dictionary_keys","Casts a [`DictionaryArray`] to a new [`DictionaryArray`] backed by a different physical type of the keys, while keeping the values equal."],["dictionary_to_dictionary_values","Casts a [`DictionaryArray`] to a new [`DictionaryArray`] by keeping the keys and casting the values to `values_type`."],["dictionary_to_values","Casts a [`DictionaryArray`] to its values’ [`DataType`], also known as unpacking. The resulting array has the same length."],["naive_timestamp_to_utf8","Returns a [`Utf8Array`] where every element is the utf8 representation of the timestamp in the rfc3339 format."],["primitive_as_primitive","Cast [`PrimitiveArray`] as a [`PrimitiveArray`] Same as `number as to_number_type` in rust"],["primitive_to_binary","Returns a [`BinaryArray`] where every element is the binary representation of the number."],["primitive_to_boolean","Returns a [`BooleanArray`] where every element is different from zero. Validity is preserved."],["primitive_to_dictionary","Cast [`PrimitiveArray`] to [`DictionaryArray`]. Also known as packing."],["primitive_to_primitive","Cast [`PrimitiveArray`] to a [`PrimitiveArray`] of another physical type via numeric conversion."],["primitive_to_same_primitive","Cast [`PrimitiveArray`] to a [`PrimitiveArray`] of the same physical type. This is O(1)."],["primitive_to_utf8","Returns a [`Utf8Array`] where every element is the utf8 representation of the number."],["time32_to_time64",""],["time32ms_to_time32s",""],["time32s_to_time32ms",""],["time64_to_time32",""],["time64ns_to_time64us",""],["time64us_to_time64ns",""],["timestamp_to_date32",""],["timestamp_to_date64",""],["timestamp_to_timestamp",""],["timestamp_to_utf8","Returns a [`Utf8Array`] where every element is the utf8 representation of the timestamp in the rfc3339 format."],["utf8_large_to_utf8",""],["utf8_to_date32","Casts a [`Utf8Array`] to a Date32 primitive, making any uncastable value a Null."],["utf8_to_date64","Casts a [`Utf8Array`] to a Date64 primitive, making any uncastable value a Null."],["utf8_to_dictionary","Cast [`Utf8Array`] to [`DictionaryArray`], also known as packing."],["utf8_to_large_utf8",""],["utf8_to_naive_timestamp_ns","[`crate::temporal_conversions::utf8_to_timestamp_ns`] applied for RFC3339 formatting"],["utf8_to_primitive","Casts a [`Utf8Array`] to a [`PrimitiveArray`], making any uncastable value a Null."],["utf8_to_timestamp_ns","[`crate::temporal_conversions::utf8_to_timestamp_ns`] applied for RFC3339 formatting"],["wrapping_cast","Similar to [`cast`], but overflowing cast is wrapped Behavior:"],["wrapping_dictionary_to_dictionary_keys","Similar to dictionary_to_dictionary_keys, but overflowing cast is wrapped"],["wrapping_dictionary_to_dictionary_values","Similar to dictionary_to_dictionary_values, but overflowing cast is wrapped"]]});