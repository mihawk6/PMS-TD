<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
<xsl:template match="/">
<!--  TODO: Auto-generated template  -->
<html>
<head/>
<body>
<h1 style="text-align:center;">Employee Management System</h1>
<table style="border-collapse:collapse; margin:0 auto;">
<tr>
<th>ID</th>
<th>AGE</th>
<th>SALARY</th>
<th>EMAIL</th>
<th>MOBNUM</th>
<th>DESIGNATION</th>
<th>PROMOTION</th>
</tr>
<xsl:for-each select="Company/Employee">
<tr>
<td>
<xsl:value-of select="Emp_ID"/>
</td>
<td>
<xsl:value-of select="Emp_AGE"/>
</td>
<td>
<xsl:value-of select="Emp_SALARY"/>
</td>
<td >
<xsl:value-of select="Emp_EMAILID"/>
</td>
<td>
<xsl:value-of select="Emp_MobNum"/>
</td>
<td >
<xsl:value-of select="Emp_designation"/>
</td>
<xsl:choose>
<xsl:when test="Emp_AGE >= 50">
<td >Associate Project Manager</td>
</xsl:when>
 <xsl:when test="Emp_AGE &gt;= 40 and Emp_AGE &lt;= 49">
<td>Team Leader</td>
</xsl:when>
<xsl:when test="Emp_AGE &lt; 40"><td >Developer</td>
</xsl:when>
<xsl:otherwise>
<td />
</xsl:otherwise>
</xsl:choose>
</tr>
</xsl:for-each>
</table>
</body>
</html>
</xsl:template>
</xsl:stylesheet>